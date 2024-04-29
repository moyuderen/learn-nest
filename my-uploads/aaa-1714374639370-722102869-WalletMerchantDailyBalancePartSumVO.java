package com.opay.fund.admin.service.arap.vo;

import java.io.Serializable;
import java.math.BigDecimal;

import com.alibaba.excel.annotation.ExcelProperty;
import com.alibaba.excel.annotation.write.style.ColumnWidth;

import lombok.Data;

@Data
@ColumnWidth(35)
public class WalletMerchantDailyBalancePartSumVO implements Serializable {
	/**
	*
	*/
	private static final long serialVersionUID = 1L;

	@ExcelProperty(value = { "Date" }, index = 0)
	private String date;

	/**
	 * 日余额汇总：abcde
	 */
	@ExcelProperty(value = { "Total" }, index = 1)
	private BigDecimal balance;

	/**
	 * 用户（不包含代理）余额汇总a
	 */
	@ExcelProperty(value = { "Customer" }, index = 2)
	private BigDecimal customerBalance;

	/**
	 * 代理（用户）余额汇总b
	 */
	@ExcelProperty(value = { "Agent" }, index = 3)
	private BigDecimal agentBalance;

	/**
	 * 外部商户余额汇总c=商户余额汇总-d1-d2-d3-d4（全部账户类型）
	 */
	@ExcelProperty(value = { "Merchant" }, index = 4)
	private BigDecimal merchantBalance;

}
