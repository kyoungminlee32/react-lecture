interface FwAccountInfoProps {
  bankCode: string;
  accountName: string;
  bankName: string;
  accountNumber: string;
  amountLabel?: string;
  availableAmount?: number | string;
  onClick?: () => void;
}

const formatAmount = (amount: number | string) => {
  if (typeof amount === 'number') {
    return amount.toLocaleString('ko-KR');
  }

  return amount;
};

export const FwAccountInfo = ({
  bankCode,
  accountName,
  bankName,
  accountNumber,
  amountLabel = '출금가능금액',
  availableAmount,
  onClick,
}: FwAccountInfoProps) => {
  return (
    <div className="account">
      <button type="button" data-bankcode={bankCode} className="info" onClick={onClick}>
        <span className="name">
          <span>{accountName}</span>
        </span>
        <span className="account-number">
          <span>{bankName}</span>
          <span className="number">{accountNumber}</span>
        </span>
      </button>
      {availableAmount !== undefined && (
        <div className="amount">
          <div className="key">{amountLabel}</div>
          <div className="value">
            <span>{formatAmount(availableAmount)}</span>원
          </div>
        </div>
      )}
    </div>
  );
};

export default FwAccountInfo;
