import React from 'react'

function Loader() {
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm">
        <div className="flex items-center justify-center space-x-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <span className="text-primary font-medium">Loading...</span>
        </div>
      </div>
  )
}

export default Loader
