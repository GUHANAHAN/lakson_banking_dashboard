const DOT = {
  Active: 'bg-[#1a8f4c]',
  'Under review': 'bg-[#b7791f]',
  Discontinued: 'bg-[#7b8794]',
};

export default function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm">
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${DOT[status]}`} />
      {status}
    </span>
  );
}
