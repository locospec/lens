const loadIcon = async (iconName: string) => {
  try {
    const module: any = await import(`lucide-react`);
    return module[iconName];
  } catch (error) {
    console.error(`Icon ${iconName} not found in lucide-react.`);
    return null;
  }
};

export default loadIcon;
