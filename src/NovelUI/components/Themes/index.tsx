import { Text } from "@/NovelUI/ui/text/text";
import useTheme from "@/utils/hooks/useTheme";
import ThemeToggle from "./themeToggle";
import "@/utils/styles/themeTokens.css";

export const NavLinks = ({
  link,
  text,
  className,
}: {
  link: string;
  text: string;
  className?: string;
}) => {
  return (
    <a
      href={`${link}`}
      className={`group text-[12px] hover:text-accent decoration-accent ${className}`}
    >
      {text}
      <div className="m-0 h-[1px] w-0 bg-accent duration-200 group-hover:w-full"></div>
    </a>
  );
};

export default function Theming() {
  /* call the useTheme hook */
  useTheme();

  return (
    <main className="max-w-xl bg-background p-6 text-gray-500 rounded-[4px]">
      <nav className="mb-4 ml-auto flex max-w-max items-center rounded-full border p-1 pr-3 shadow">
        <ThemeToggle />
        <NavLinks link="#" text="Home" className="ml-2 text-accent" />
        <NavLinks link="#" text="Work" className="ml-2" />
        <NavLinks link="#" text="About" className="ml-2" />
      </nav>
      <Text as="h1" size="h1" className="text-foreground-secondary">
        Theme Playground
      </Text>
      <Text as="p" size="12" className="">
        This story is used as a playground to test out themes in UI development.
        As such, I'ld add more text to fill the void, like this "nice" statement
        from JerryRigEverything "Glass is glass and glass breaks"
      </Text>

      <section className="my-2 mt-5">
        <Text as="h2" size="h2" className="text-foreground-secondary opacity-90">
          Inbox
        </Text>
      </section>
    </main>
  );
}
