import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Button >
        Enviar
      </Button>
      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail />
            <InputField />
          </InputIcon>
        </InputRoot>
      </div>
    </main>
  );
}
