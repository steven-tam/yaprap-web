import Link from 'next/link';
import React from 'react'

function Citations() {
  
    return (
      <div className="text-3xl hover:underline font-semibold">
        <Link href={'/citations'} target='blank'>View Citations →</Link>
      </div>
    );
  };

export default Citations