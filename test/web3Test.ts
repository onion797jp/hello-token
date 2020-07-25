import { Web3Service } from '../src/services/web3/web3.service';

const accountAddr = process.env.ACCOUNT_ADDR;
const accountPriv = process.env.PRIVATE_KEY;

// contracts
import * as CompiledToken from '../contracts/HelloToken.json';
const ABI = CompiledToken.abi;
const BYTECODE = CompiledToken.bytecode;
const CONTRACT_ADDR = '0xa796FCFD2da744e1A3a88446cc6D71B993d49C94';

const web3Service = new Web3Service();

async function deploy_test() {
  const nonce = await web3Service.getPendingTxCount(accountAddr);
  console.log('pending txCount is', nonce);
  const contractAddr = await web3Service.genContractAddress(nonce, accountAddr);
  console.log('contract addr is', contractAddr);
  const txHash = await web3Service.deploy(
    ABI,
    BYTECODE,
    null,
    nonce,
    accountAddr,
    accountPriv,
  );
  console.log('txHash is', txHash);
}
// deploy_test();

async function call_test() {
  const instance = web3Service.getInstance(ABI, CONTRACT_ADDR);

  const name = await web3Service.call(instance, 'name', {}, accountAddr);
  console.log('name is', name);

  const nextId = await web3Service.call(
    instance,
    'nextTokenId',
    {},
    accountAddr,
  );
  console.log('nextId is', nextId);
}
call_test();

async function mint_test() {
  const instance = web3Service.getInstance(ABI, CONTRACT_ADDR);
  const nonce = await web3Service.getPendingTxCount(accountAddr);
  console.log('pending txCount is', nonce);
  const txHash = await web3Service.send(
    instance,
    'mint',
    { amount: 300 },
    nonce,
    accountAddr,
    accountPriv,
  );
  console.log('txHash is', txHash);
}
// mint_test();
