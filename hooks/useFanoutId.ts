import { FanoutClient } from '@glasseaters/hydra-sdk'
import { firstParam } from './utils'
import { useRouter } from 'next/router'
import { useDataHook } from './useDataHook'
import { PublicKey } from '@solana/web3.js'

export const useFanoutId = () => {
return {data: new PublicKey("8DN9ryLUn22TsqD4jCB8dfwh3fU2Vwv7MencoM3GChJm")}
}
