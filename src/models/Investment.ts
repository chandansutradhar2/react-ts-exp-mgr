export interface Investment {
	name: string;
	investmentType: INVESTMENT_TYPE;
}

export enum INVESTMENT_TYPE {
	"MF" = "MF",
	"LiquidFund" = "LiquidFund",
	"FD" = "FD",
	"DebtFund" = "DebtFund",
}

let investment: Investment = {
	investmentType: INVESTMENT_TYPE.MF,
	name: "Axis Bank Long Growth Fund",
};

let investment2: Investment = {
	investmentType: INVESTMENT_TYPE.MF,
	name: "HDFC MF",
};
