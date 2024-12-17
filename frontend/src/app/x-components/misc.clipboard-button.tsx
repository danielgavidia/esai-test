import { Copy } from "lucide-react";

interface CopyToClipboardButtonProps {
  textToCopy: string;
}

const CopyToClipboardButton = ({ textToCopy }: CopyToClipboardButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button onClick={handleCopy}>
      <Copy className="h-4" />
    </button>
  );
};

export default CopyToClipboardButton;
