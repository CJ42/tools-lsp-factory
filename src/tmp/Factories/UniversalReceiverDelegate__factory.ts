/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  UniversalReceiverDelegate,
  UniversalReceiverDelegateInterface,
} from '../UniversalReceiverDelegate';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'typeId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'universalReceiverDelegate',
    outputs: [
      {
        internalType: 'bytes',
        name: 'result',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061002163c2d7bcc160e01b610026565b6100a9565b6001600160e01b031980821614156100845760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015260640160405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6112c0806100b86000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b578063c2d7bcc114610063575b600080fd5b61004e610049366004610fc0565b610083565b60405190151581526020015b60405180910390f35b610076610071366004610e61565b6100dc565b60405161005a9190611165565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b0319831614806100d657506001600160e01b0319821660009081526020819052604090205460ff165b92915050565b60606000336001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561011957600080fd5b505afa15801561012d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101519190610e44565b6040516bffffffffffffffffffffffff19606088901b16602082015290915060009061018e90603401604051602081830303815290604052610482565b90507fdbe2c314e1aee2970c72666f2ebe8933a8575263ea71e5ff6a9178e95d47a26f8514806101dd57507fc7a120a42b6057a0cbed111fbbfbd52fcd96748c04394f77fc2c3adbe0391e0185145b156102955760006101ee33836104d8565b90508051600c1461028f5760006102068389896105e0565b6040516304e2f55f60e11b81529091506001600160a01b038516906309c5eabe90610235908490600401611165565b600060405180830381600087803b15801561024f57600080fd5b505af1158015610263573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261028b9190810190610fea565b9450505b50610478565b7f40b8bec57d7b5ff0dbd9e9acd0a47dfeb0101e1a203766f5ccab00445fbf39e98514806102e257507f3724c94f0815e936299cca424da4140752198e0beb7931a6e0925d11bc97544c85145b1561045f576040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526000906001600160a01b038816906370a082319060240160206040518083038186803b15801561034257600080fd5b505afa158015610356573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037a919061101f565b905060007f40b8bec57d7b5ff0dbd9e9acd0a47dfeb0101e1a203766f5ccab00445fbf39e98714156103b1575060488501516103b5565b5060015b6103bf81836111e9565b6104585760006103cf888561090e565b6040516304e2f55f60e11b81529091506001600160a01b038616906309c5eabe906103fe908490600401611165565b600060405180830381600087803b15801561041857600080fd5b505af115801561042c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104549190810190610fea565b9550505b5050610478565b604051806020016040528060008152509250505061047b565b50505b9392505050565b60405160009081906104bc907f812c4334633eb816c80deebfa5fb7d2509eb438ca1b6418106442cb5ccc62f6c908390869060200161109f565b604051602081830303815290604052905061047b816020015190565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061051257610512611246565b60209081029190910101526040517f4e3e6e9c0000000000000000000000000000000000000000000000000000000081526000906001600160a01b03861690634e3e6e9c906105659085906004016110e0565b60006040518083038186803b15801561057d57600080fd5b505afa158015610591573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105b99190810190610ef8565b6000815181106105cb576105cb611246565b60200260200101519050809250505092915050565b60408051600380825260808201909252606091600091906020820184803683375050604080516003808252608082019092529293506000929150602082015b606081526020019060019003908161061f5790505090506000610662337f6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b6104d8565b90507f6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b60001b8360008151811061069b5761069b611246565b60200260200101818152505086836002815181106106bb576106bb611246565b602002602001018181525050856040516020016106f0919060609190911b6bffffffffffffffffffffffff1916815260140190565b6040516020818303038152906040528260018151811061071257610712611246565b602002602001018190525080516020146107f3576107306000610c69565b8360018151811061074357610743611246565b602002602001018181525050600160405160200161076391815260200190565b6040516020818303038152906040528260008151811061078557610785611246565b6020908102919091010152600061079b86610cca565b6040516001600160c01b031990921660208301526001600160e01b0319166028820152602c01604051602081830303815290604052826002815181106107e3576107e3611246565b60200260200101819052506108f9565b8051602014156108f957600081806020019051810190610813919061101f565b905060006108228260016111d1565b90506108376108326001836111e9565b610c69565b8560018151811061084a5761084a611246565b6020026020010181815250508060405160200161086991815260200190565b6040516020818303038152906040528460008151811061088b5761088b611246565b60200260200101819052508160c01b6108a388610cca565b6040516001600160c01b031990921660208301526001600160e01b0319166028820152602c01604051602081830303815290604052846002815181106108eb576108eb611246565b602002602001018190525050505b6109038383610d6c565b979650505050505050565b60408051600580825260c08201909252606091600091906020820160a080368337505060408051600580825260c082019092529293506000929150602082015b606081526020019060019003908161094e579050509050600061097085610dd7565b905060006109878267ffffffffffffffff16610c69565b905060006109b5337f6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b6104d8565b90506000818060200190518101906109cd919061101f565b905060006109dc6001836111e9565b90507f6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b60001b87600081518110610a1557610a15611246565b60200260200101818152505080604051602001610a3491815260200190565b60405160208183030381529060405286600081518110610a5657610a56611246565b60200260200101819052508887600181518110610a7557610a75611246565b6020026020010181815250506040518060200160405280600081525086600181518110610aa457610aa4611246565b6020908102919091010152610aba6001836111e9565b8567ffffffffffffffff161415610b1e578387600281518110610adf57610adf611246565b6020026020010181815250506040518060200160405280600081525086600281518110610b0e57610b0e611246565b6020026020010181905250610c51565b6000610b2982610c69565b90506000610b3733836104d8565b90508589600281518110610b4d57610b4d611246565b6020026020010181815250508088600281518110610b6d57610b6d611246565b60200260200101819052508189600381518110610b8c57610b8c611246565b6020026020010181815250506040518060200160405280600081525088600381518110610bbb57610bbb611246565b6020026020010181905250610bcf81610482565b89600481518110610be257610be2611246565b6020026020010181815250508660c01b610bfb8d610cca565b6040516001600160c01b031990921660208301526001600160e01b0319166028820152602c0160405160208183030381529060405288600481518110610c4357610c43611246565b602002602001018190525050505b610c5b8787610d6c565b9a9950505050505050505050565b604080517f6460ee3c0aac563ccbf76d6e1d07bada0000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffff00000000000000000000000000000000608084901b1660308201526000918291016104bc565b60007f40b8bec57d7b5ff0dbd9e9acd0a47dfeb0101e1a203766f5ccab00445fbf39e9821480610d1957507fdbe2c314e1aee2970c72666f2ebe8933a8575263ea71e5ff6a9178e95d47a26f82145b15610d4557507fe33f65c300000000000000000000000000000000000000000000000000000000919050565b507f4939914500000000000000000000000000000000000000000000000000000000919050565b60606314a6e29360e01b8383604051602401610d899291906110f3565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b0319909316929092179091529392505050565b600080610de433846104d8565b6020015160c01c9392505050565b600082601f830112610e0357600080fd5b8151610e16610e11826111a9565b611178565b818152846020838601011115610e2b57600080fd5b610e3c826020830160208701611200565b949350505050565b600060208284031215610e5657600080fd5b815161047b81611272565b600080600060608486031215610e7657600080fd5b8335610e8181611272565b925060208401359150604084013567ffffffffffffffff811115610ea457600080fd5b8401601f81018613610eb557600080fd5b8035610ec3610e11826111a9565b818152876020838501011115610ed857600080fd5b816020840160208301376000602083830101528093505050509250925092565b60006020808385031215610f0b57600080fd5b825167ffffffffffffffff80821115610f2357600080fd5b818501915085601f830112610f3757600080fd5b815181811115610f4957610f4961125c565b8060051b610f58858201611178565b8281528581019085870183870188018b1015610f7357600080fd5b60009350835b85811015610fb057815187811115610f8f578586fd5b610f9d8d8b838c0101610df2565b8552509288019290880190600101610f79565b50909a9950505050505050505050565b600060208284031215610fd257600080fd5b81356001600160e01b03198116811461047b57600080fd5b600060208284031215610ffc57600080fd5b815167ffffffffffffffff81111561101357600080fd5b610e3c84828501610df2565b60006020828403121561103157600080fd5b5051919050565b600081518084526020808501945080840160005b838110156110685781518752958201959082019060010161104c565b509495945050505050565b6000815180845261108b816020860160208601611200565b601f01601f19169290920160200192915050565b6001600160c01b0319841681526001600160e01b031983166008820152600082516110d181600c850160208701611200565b91909101600c01949350505050565b60208152600061047b6020830184611038565b6040815260006111066040830185611038565b6020838203818501528185518084528284019150828160051b85010183880160005b8381101561115657601f19878403018552611144838351611073565b94860194925090850190600101611128565b50909998505050505050505050565b60208152600061047b6020830184611073565b604051601f8201601f1916810167ffffffffffffffff811182821017156111a1576111a161125c565b604052919050565b600067ffffffffffffffff8211156111c3576111c361125c565b50601f01601f191660200190565b600082198211156111e4576111e4611230565b500190565b6000828210156111fb576111fb611230565b500390565b60005b8381101561121b578181015183820152602001611203565b8381111561122a576000848401525b50505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461128757600080fd5b5056fea2646970667358221220c046f175d781e47e30aa3e26ce6d44785741251d1057077df8dc30f835b818a564736f6c63430008070033';

export class UniversalReceiverDelegate__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniversalReceiverDelegate> {
    return super.deploy(overrides || {}) as Promise<UniversalReceiverDelegate>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniversalReceiverDelegate {
    return super.attach(address) as UniversalReceiverDelegate;
  }
  connect(signer: Signer): UniversalReceiverDelegate__factory {
    return super.connect(signer) as UniversalReceiverDelegate__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniversalReceiverDelegateInterface {
    return new utils.Interface(_abi) as UniversalReceiverDelegateInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): UniversalReceiverDelegate {
    return new Contract(address, _abi, signerOrProvider) as UniversalReceiverDelegate;
  }
}