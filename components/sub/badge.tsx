type BadgeColor = 'blue' | 'red' | 'green' | 'gray';

export default function Badge({ text, color = 'gray' }: { text: string; color?: BadgeColor }) {
  const colorClasses: Record<BadgeColor, string> = {
    blue: 'bg-blue-100 text-blue-800',
    red: 'bg-red-100 text-red-800',
    green: 'bg-green-100 text-green-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`inline-block mr-2 mb-2 px-3 py-1 rounded-full text-sm font-semibold ${colorClasses[color]}`}>
      {text}
    </span>
  );
}
