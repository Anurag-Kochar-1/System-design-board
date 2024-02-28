const ColorPalette = () => {
    return (
      <>
        {" "}
        <div className="min-h-screen flex w-full flex-wrap gap-10 justify-start items-center p-10">
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl bg-background text-center py-4">
            <span>background</span>
          </div>
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl bg-foreground text-center py-4">
            <span>foreground</span>
          </div>
  
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-secondary">
            <span>secondary</span>
          </div>
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-secondary-foreground">
            <span>secondary-foreground</span>
          </div>
  
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-primary">
            <span>primary</span>
          </div>
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-primary-foreground">
            <span>primary-forground</span>
          </div>
  
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-muted">
            <span>muted</span>
          </div>
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-muted-foreground">
            <span>muted-forground</span>
          </div>
  
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-accent">
            <span>accent</span>
          </div>
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-accent-foreground">
            <span>accent-foreground</span>
          </div>
  
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-destructive">
            <span>destructive</span>
          </div>
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-destructive-foreground">
            <span>destructive-foreground</span>
          </div>
  
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-border">
            <span>border</span>
          </div>
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-input">
            <span>input</span>
          </div>
          <div className="w-32 h-32 border-2 border-pink-500 font-medium text-xl text-center py-4 bg-ring">
            <span>ring</span>
          </div>
        </div>
      </>
    );
  };