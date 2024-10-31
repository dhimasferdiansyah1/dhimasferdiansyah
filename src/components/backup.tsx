<div className="flex gap-4 items-center">
  {/* count view */}
  <div className="flex flex-col items-center gap-2 mt-4">
    <div
      className="flex items-center gap-2 bg-zinc-700 text-white p-1.5 rounded-full"
      data-icon="octicon-eye"
      data-size="large"
      data-show-count="true"
      aria-label="Star dhimasferdiansyah1/dhimas-portfolio on GitHub"
    >
      <Eye size={8} className="w-4 h-4 sm:w-6 sm:h-6" />
    </div>
    {/* count */}
    <p className="text-zinc-400 text-sm">561 views</p>
  </div>
  {/* count like */}
  <div className="flex flex-col items-center gap-2 mt-4">
    <button
      className="flex items-center gap-2 bg-zinc-700 text-white hover:bg-blue-500 transition-colors duration-200 p-1.5 rounded-full"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star dhimasferdiansyah1/dhimas-portfolio on GitHub"
    >
      <ThumbsUp size={8} className="w-4 h-4 sm:w-6 sm:h-6" />
    </button>
    {/* count */}
    <p className="text-zinc-400 text-sm">67 like</p>
  </div>
</div>;
