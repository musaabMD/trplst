// types.js
export const colorOptions = [
    { name: 'Default Dark', color: 'bg-[#19171D]', textColor: 'text-gray-100' },
    { name: 'Midnight Blue', color: 'bg-[#1a1d24]', textColor: 'text-gray-100' },
    { name: 'Forest', color: 'bg-[#1a241f]', textColor: 'text-gray-100' },
    { name: 'Aubergine', color: 'bg-[#1f1a24]', textColor: 'text-gray-100' },
    { name: 'Maroon', color: 'bg-[#241a1a]', textColor: 'text-gray-100' },
  ];
  
  export const initialData = {
    users: [
      { id: 1, name: 'John Doe', status: 'online', avatar: '/api/placeholder/32/32' },
      { id: 2, name: 'Jane Smith', status: 'offline', avatar: '/api/placeholder/32/32' },
      { id: 3, name: 'Mike Johnson', status: 'online', avatar: '/api/placeholder/32/32' }
    ],
    cities: [
      { id: 'nyc', name: 'New York' },
      { id: 'ldn', name: 'London' },
      { id: 'tky', name: 'Tokyo' }
    ],
    countries: [
      { id: 'usa', name: 'United States' },
      { id: 'uk', name: 'United Kingdom' },
      { id: 'jpn', name: 'Japan' }
    ],
    extendedData: {
      cities: [
        { id: 'par', name: 'Paris' },
        { id: 'dbi', name: 'Dubai' },
        { id: 'sin', name: 'Singapore' }
      ],
      countries: [
        { id: 'fra', name: 'France' },
        { id: 'uae', name: 'UAE' },
        { id: 'sgp', name: 'Singapore' }
      ],
      users: [
        { id: 4, name: 'Sarah Wilson', status: 'online', avatar: '/api/placeholder/32/32' },
        { id: 5, name: 'Tom Brown', status: 'offline', avatar: '/api/placeholder/32/32' }
      ]
    }
  };