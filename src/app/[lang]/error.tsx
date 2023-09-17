'use client';

import React from 'react';

import { Button, ErrorMessage, WrapperError } from '@/app/[lang]/styles';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const handleReset = () => reset();

  return (
    <WrapperError>
      <ErrorMessage>Something went wrong!</ErrorMessage>
      <ErrorMessage>{error.message}</ErrorMessage>
      <Button type='button' onClick={handleReset}>
        Try again
      </Button>
    </WrapperError>
  );
}
