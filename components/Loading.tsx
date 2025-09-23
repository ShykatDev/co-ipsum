const Loading = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center justify-center"
    >
      <span className="sr-only">Loading slider...</span>
      <svg className="animate-spin h-5 w-5 text-gray-500" />
    </div>
  );
};

export default Loading;
