export enum Status {
  NONE,
  LOADING,
  REFRESHING,
  PARTIALLY_LOADED,
  LOADED
}

export enum Section {
  NONE = 'none',
  ASSET_MOVEMENT = 'asset_movement',
  TRADES = 'trades',
  TX = 'tx',
  DEFI_COMPOUND_BALANCES = 'defi_compound_balances',
  DEFI_COMPOUND_HISTORY = 'defi_compound_history',
  DEFI_OVERVIEW = 'defi_overview',
  DEFI_AAVE_BALANCES = 'defi_aave_balances',
  DEFI_AAVE_HISTORY = 'defi_aave_history',
  DEFI_BORROWING_HISTORY = 'defi_borrowing_history',
  DEFI_LENDING = 'defi_lending',
  DEFI_LENDING_HISTORY = 'defi_lending_history',
  DEFI_BORROWING = 'defi_borrowing',
  DEFI_BALANCES = 'defi_balances',
  DEFI_DRS_BALANCES = 'defi_dsr_balances',
  DEFI_DSR_HISTORY = 'defi_dsr_history',
  DEFI_MAKERDAO_VAULT_DETAILS = 'defi_makerdao_vault_details',
  DEFI_MAKERDAO_VAULTS = 'defi_makerdao_vaults',
  DEFI_YEARN_VAULTS_HISTORY = 'defi_yearn_vaults_history',
  DEFI_YEARN_VAULTS_BALANCES = 'defi_yearn_vaults_balances',
  BLOCKCHAIN_BTC = 'blockchain_btc',
  BLOCKCHAIN_ETH = 'blockchain_eth'
}

export const defiSections: Section[] = [
  Section.DEFI_COMPOUND_BALANCES,
  Section.DEFI_COMPOUND_HISTORY,
  Section.DEFI_OVERVIEW,
  Section.DEFI_AAVE_BALANCES,
  Section.DEFI_AAVE_HISTORY,
  Section.DEFI_BORROWING_HISTORY,
  Section.DEFI_LENDING,
  Section.DEFI_LENDING_HISTORY,
  Section.DEFI_BORROWING,
  Section.DEFI_BALANCES,
  Section.DEFI_DRS_BALANCES,
  Section.DEFI_DSR_HISTORY,
  Section.DEFI_MAKERDAO_VAULT_DETAILS,
  Section.DEFI_MAKERDAO_VAULTS,
  Section.DEFI_YEARN_VAULTS_BALANCES,
  Section.DEFI_YEARN_VAULTS_HISTORY
];
