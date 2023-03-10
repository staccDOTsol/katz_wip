import { useFanoutId } from './useFanoutId'
import * as hydra from '@glasseaters/hydra-sdk'
import { BorshAccountsCoder, utils } from '@project-serum/anchor'
import { Connection, PublicKey } from '@solana/web3.js'
import { useEnvironmentCtx } from '../providers/EnvironmentProvider'

import { useDataHook } from './useDataHook'
import { AccountData } from '@cardinal/token-manager'
import { FanoutMembershipVoucher } from '@glasseaters/hydra-sdk'

const HYDRA_PROGRAM_ID = new PublicKey(
  'hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg'
)

export const useFanoutMembershipVouchers = () => {
  const  connection  = new Connection("https://rpc.helius.xyz/?api-key=6b1ccd35-ba2d-472a-8f54-9ac2c3c40b8b")
  const { data: fanoutId } = useFanoutId()
  return useDataHook<AccountData<FanoutMembershipVoucher>[]>(
    async () => {
      if (!fanoutId) return
      const programAccounts = await connection.getProgramAccounts(
        HYDRA_PROGRAM_ID,
        {
          filters: [
            {
              memcmp: {
                offset: 0,
                bytes: utils.bytes.bs58.encode(
                  BorshAccountsCoder.accountDiscriminator(
                    'fanoutMembershipVoucher'
                  )
                ),
              },
            },
            {
              memcmp: {
                offset: 8,
                bytes: fanoutId.toBase58(),
              },
            },
          ],
        }
      )
      return programAccounts
        .map((account) => {
          return {
            pubkey: account.pubkey,
            parsed: hydra.FanoutMembershipVoucher.fromAccountInfo(
              account.account
            )[0],
          }
        })
        .sort((a, b) =>
          parseInt(a.parsed.shares.toString()) ===
          parseInt(b.parsed.shares.toString())
            ? a.parsed.membershipKey
                .toString()
                .localeCompare(b.parsed.membershipKey.toString())
            : parseInt(b.parsed.shares.toString()) -
              parseInt(a.parsed.shares.toString())
        )
    },
    [fanoutId?.toString()],
    { name: 'useFanoutMembershipVoucher' }
  )
}
