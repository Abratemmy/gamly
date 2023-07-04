import React from "react";

export function Table({ children, className }) { return <table className={className}>{children}</table> }
export function Thead({ children, className }) { return <thead className={className}>{children}</thead> }
export function Tbody({ children, className }) { return <tbody className={className}>{children}</tbody> }
export function Th({ children, className }) { return <th className={className}>{children}</th> }
export function Tr({ children, className, onClick }) { return <tr className={className} onClick={onClick}>{children}</tr> }
export function Td({ children, className }) { return <td className={className}>{children}</td> }