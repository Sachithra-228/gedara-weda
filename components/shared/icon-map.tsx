import {
  Cctv,
  DoorOpen,
  Droplets,
  Grid3X3,
  Hammer,
  HardHat,
  Home,
  House,
  LucideIcon,
  Paintbrush,
  PanelTop,
  Snowflake,
  Sparkles,
  Trees,
  Wrench,
  Zap
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Cctv,
  DoorOpen,
  Droplets,
  Grid3X3,
  Hammer,
  HardHat,
  Home,
  House,
  Paintbrush,
  PanelTop,
  Snowflake,
  Sparkles,
  Trees,
  Wrench,
  Zap
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Home;
  return <Icon className={className} />;
}
