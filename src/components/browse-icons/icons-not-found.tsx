import { motion } from "motion/react";
import { Button } from "../ui/button";

interface Props {
  setSearchQuery: (arg: string) => void;
}
const IconsNotFound = ({ setSearchQuery }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <p className="text-xl text-muted-foreground font-medium">
        No icons found matching your search.
      </p>
      <Button
        variant={"secondary"}
        onClick={() => {
          setSearchQuery("");
        }}
        className="mt-4 text-primary hover:underline font-medium"
      >
        Clear all filters
      </Button>
    </motion.div>
  );
};

export default IconsNotFound;
