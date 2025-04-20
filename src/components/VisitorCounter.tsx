
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const VisitorCounter = () => {
  const [count, setCount] = useState<number>(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ['visitorCount'],
    queryFn: async () => {
      // Replace this URL with your AWS Lambda API endpoint
      const response = await fetch('YOUR_AWS_LAMBDA_API_URL');
      if (!response.ok) {
        throw new Error('Failed to fetch visitor count');
      }
      const data = await response.json();
      return data.count;
    },
  });

  useEffect(() => {
    if (data) {
      setCount(data);
    }
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-2 text-gray-400"
    >
      <Users size={16} />
      <span>{isLoading ? "Loading..." : `${count} visitors`}</span>
    </motion.div>
  );
};

export default VisitorCounter;
