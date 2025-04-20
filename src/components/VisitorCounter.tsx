
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

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
    retry: 3,
    staleTime: 60000, // Cache the result for 1 minute
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error",
          description: "Failed to fetch visitor count. Please try again later.",
          variant: "destructive"
        });
        console.error('Visitor counter error:', error);
      }
    }
  });

  useEffect(() => {
    if (data) {
      setCount(data);
    }
  }, [data]);

  // Display an error message if there was an error
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch visitor count. Please try again later.",
        variant: "destructive"
      });
      console.error('Visitor counter error:', error);
    }
  }, [error]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
    >
      <Users size={16} className="animate-pulse" />
      <span className="font-medium">
        {isLoading ? "Loading..." : `${count} visitors`}
      </span>
    </motion.div>
  );
};

export default VisitorCounter;
