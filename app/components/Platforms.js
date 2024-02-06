export default function Platforms({ platforms }) {
  //   const filteredPlatforms = platforms.filter(
  //     (platforms) => platforms.platform_logo,
  //   );

  return (
    <div className="flex flex-wrap gap-2">
      {platforms.map((platform) => {
        return (
          <div
            key={platform.id}
            className="badge badge-accent badge-outline whitespace-nowrap"
          >
            {platform.name}
          </div>
        );
      })}
    </div>
  );
}
