// SPDX-License-Identifier: MIT
pragma solidity 0.8.5;

abstract contract ashUniSwap {
    //UniswapV2Router02 is deployed at 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
    
    // **** ADD LIQUIDITY ****
    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable virtual returns (uint amountToken, uint amountETH, uint liquidity);
    
    address public WETH;

    function getAmountsIn(uint amountOut, address[] calldata path)
        external view virtual returns (uint[] memory amounts);

    function swapExactETHForTokens(uint amountOut, address[] calldata path, address to, uint deadline)
        external
        payable
        virtual
        returns (uint[] memory amounts);
}