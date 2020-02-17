import React from 'react';

export default function MantraList({
    mantras
}) {
    return (
        <div>
            {
              mantras.map( (m, i) => (
              <li key={i}>{m}</li>
              ) )  
            }
        </div>
    );
}