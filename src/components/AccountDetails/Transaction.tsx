import { useWeb3React } from '@web3-react/core';
import clsx from 'clsx';
import React, { FC } from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';

import ExternalLink from '@/components/ExternalLink';
import Loader from '@/components/Loader';
import Typography from '@/components/Typography';

import { getExplorerLink } from '@/functions';
import { useAllTransactions } from '@/state/transactions/hooks';

const Transaction: FC<{ hash: string }> = ({ hash }) => {
  const { chainId } = useWeb3React();
  const allTransactions = useAllTransactions();

  const tx = allTransactions?.[hash];
  const summary = tx?.summary;
  const pending = !tx?.receipt;
  const success =
    !pending &&
    tx &&
    (tx.receipt?.status === 1 || typeof tx.receipt?.status === 'undefined');
  const cancelled = tx?.receipt && tx.receipt.status === 1337;

  if (!chainId) return null;

  return (
    <div className='flex w-full flex-col py-1'>
      <ExternalLink
        href={getExplorerLink(chainId, hash, 'transaction')}
        className='flex items-center gap-2'
      >
        <div
          className={clsx(
            pending
              ? 'text-primary'
              : success
              ? 'text-green'
              : cancelled
              ? 'text-red'
              : 'text-red'
          )}
        >
          {pending ? (
            <Loader />
          ) : success ? (
            <AiOutlineCheckCircle width={16} height={16} />
          ) : cancelled ? (
            <AiOutlineCloseCircle width={16} height={16} />
          ) : (
            <AiOutlineExclamationCircle width={16} height={16} />
          )}
        </div>
        <Typography
          variant='xs'
          weight={700}
          className='flex items-center py-0.5 hover:underline'
        >
          {summary ?? hash}
        </Typography>
      </ExternalLink>
    </div>
  );
};

export default Transaction;
