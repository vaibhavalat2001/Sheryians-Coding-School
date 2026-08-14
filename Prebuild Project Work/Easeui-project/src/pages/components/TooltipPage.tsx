import React, { useState } from "react";
import { Tooltip } from "@/components/Tooltip";


// --------------------------------------------------
// Tooltip Demo Component
// --------------------------------------------------

interface TooltipDemoProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
}

const TooltipDemo = ({
  title,
  description,
  code,
  children,
}: TooltipDemoProps) => {

  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);


  // --------------------------------------------------
  // Copy Code
  // --------------------------------------------------

  const handleCopy = async () => {

    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };


  return (
    <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      {/* ---------------------------------------------- */}
      {/* Header */}
      {/* ---------------------------------------------- */}

      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">

        <div>
          <h3 className="font-semibold text-gray-900">
            {title}
          </h3>

          {description && (
            <p className="mt-1 text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>


        {/* Show / Hide Code */}

        <button
          type="button"
          onClick={() => setShowCode((prev) => !prev)}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>

      </div>


      {/* ---------------------------------------------- */}
      {/* Tooltip Preview */}
      {/* ---------------------------------------------- */}

      <div className="flex min-h-[180px] items-center justify-center p-8">

        {children}

      </div>


      {/* ---------------------------------------------- */}
      {/* Code */}
      {/* ---------------------------------------------- */}

      {showCode && (
        <div className="border-t border-gray-200 bg-slate-950">

          {/* Code Header */}

          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">

            <span className="text-sm text-gray-400">
              Example
            </span>

            <button
              type="button"
              onClick={handleCopy}
              className="rounded-md bg-slate-800 px-3 py-1.5 text-sm text-white transition hover:bg-slate-700"
            >
              {copied ? "✓ Copied!" : "Copy Code"}
            </button>

          </div>


          {/* Code */}

          <pre className="overflow-x-auto p-5 text-sm leading-6 text-gray-200">
            <code>{code}</code>
          </pre>

        </div>
      )}

    </div>
  );
};


// --------------------------------------------------
// Tooltip Page
// --------------------------------------------------

const TooltipPage = () => {

  return (
    <div className="mx-auto max-w-5xl p-8">

      {/* ---------------------------------------------- */}
      {/* Page Header */}
      {/* ---------------------------------------------- */}

      <div className="mb-12">

        <h1 className="text-4xl font-bold text-gray-900">
          Tooltip
        </h1>

        <p className="mt-3 max-w-2xl text-gray-500">
          Display helpful information when users hover, click,
          or focus on an element.
        </p>

      </div>


      {/* ================================================== */}
      {/* 1. TRIGGER TYPES */}
      {/* ================================================== */}

      <h2 className="mb-5 text-2xl font-bold">
        Trigger Types
      </h2>


      {/* Hover */}

      <TooltipDemo
        title="Hover Tooltip"
        description="Tooltip appears when the user hovers over the trigger."
        code={`<Tooltip
  content="This tooltip appears on hover"
  trigger="hover"
  position="top"
  variant="dark"
>
  <button>
    Hover Me
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="This tooltip appears on hover"
          trigger="hover"
          position="top"
          variant="dark"
        >
          <button className="rounded-md bg-indigo-600 px-5 py-3 text-white">
            Hover Me
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Click */}

      <TooltipDemo
        title="Click Tooltip"
        description="Tooltip appears when the user clicks the trigger."
        code={`<Tooltip
  content="This tooltip appears on click"
  trigger="click"
  position="top"
  variant="info"
>
  <button>
    Click Me
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="This tooltip appears on click"
          trigger="click"
          position="top"
          variant="info"
        >
          <button className="rounded-md bg-blue-600 px-5 py-3 text-white">
            Click Me
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Focus */}

      <TooltipDemo
        title="Focus Tooltip"
        description="Tooltip appears when the trigger receives focus."
        code={`<Tooltip
  content="This tooltip appears on focus"
  trigger="focus"
  position="top"
  variant="success"
>
  <button>
    Focus Me
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="This tooltip appears on focus"
          trigger="focus"
          position="top"
          variant="success"
        >
          <button className="rounded-md bg-green-600 px-5 py-3 text-white">
            Focus Me
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* ================================================== */}
      {/* 2. POSITIONS */}
      {/* ================================================== */}

      <h2 className="mb-5 mt-14 text-2xl font-bold">
        Tooltip Positions
      </h2>


      {/* Top */}

      <TooltipDemo
        title="Top Tooltip"
        code={`<Tooltip
  content="Tooltip on top"
  position="top"
>
  <button>
    Top
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Tooltip on top"
          position="top"
        >
          <button className="rounded-md bg-slate-900 px-5 py-3 text-white">
            Top
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Bottom */}

      <TooltipDemo
        title="Bottom Tooltip"
        code={`<Tooltip
  content="Tooltip on bottom"
  position="bottom"
>
  <button>
    Bottom
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Tooltip on bottom"
          position="bottom"
        >
          <button className="rounded-md bg-slate-900 px-5 py-3 text-white">
            Bottom
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Left */}

      <TooltipDemo
        title="Left Tooltip"
        code={`<Tooltip
  content="Tooltip on left"
  position="left"
>
  <button>
    Left
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Tooltip on left"
          position="left"
        >
          <button className="rounded-md bg-slate-900 px-5 py-3 text-white">
            Left
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Right */}

      <TooltipDemo
        title="Right Tooltip"
        code={`<Tooltip
  content="Tooltip on right"
  position="right"
>
  <button>
    Right
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Tooltip on right"
          position="right"
        >
          <button className="rounded-md bg-slate-900 px-5 py-3 text-white">
            Right
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* ================================================== */}
      {/* 3. VARIANTS */}
      {/* ================================================== */}

      <h2 className="mb-5 mt-14 text-2xl font-bold">
        Tooltip Variants
      </h2>


      {/* Dark */}

      <TooltipDemo
        title="Dark Tooltip"
        code={`<Tooltip
  content="Dark tooltip"
  variant="dark"
>
  <button>
    Dark
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Dark tooltip"
          variant="dark"
        >
          <button className="rounded-md bg-gray-700 px-5 py-3 text-white">
            Dark
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Light */}

      <TooltipDemo
        title="Light Tooltip"
        code={`<Tooltip
  content="Light tooltip"
  variant="light"
>
  <button>
    Light
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Light tooltip"
          variant="light"
        >
          <button className="rounded-md bg-gray-200 px-5 py-3 text-gray-900">
            Light
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Info */}

      <TooltipDemo
        title="Info Tooltip"
        code={`<Tooltip
  content="Information tooltip"
  variant="info"
>
  <button>
    Info
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Information tooltip"
          variant="info"
        >
          <button className="rounded-md bg-blue-600 px-5 py-3 text-white">
            Info
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Success */}

      <TooltipDemo
        title="Success Tooltip"
        code={`<Tooltip
  content="Operation completed successfully"
  variant="success"
>
  <button>
    Success
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Operation completed successfully"
          variant="success"
        >
          <button className="rounded-md bg-green-600 px-5 py-3 text-white">
            Success
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Warning */}

      <TooltipDemo
        title="Warning Tooltip"
        code={`<Tooltip
  content="Please be careful"
  variant="warning"
>
  <button>
    Warning
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Please be careful"
          variant="warning"
        >
          <button className="rounded-md bg-yellow-500 px-5 py-3 text-black">
            Warning
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Error */}

      <TooltipDemo
        title="Error Tooltip"
        code={`<Tooltip
  content="Something went wrong"
  variant="error"
>
  <button>
    Error
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Something went wrong"
          variant="error"
        >
          <button className="rounded-md bg-red-600 px-5 py-3 text-white">
            Error
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* ================================================== */}
      {/* 4. SIZES */}
      {/* ================================================== */}

      <h2 className="mb-5 mt-14 text-2xl font-bold">
        Tooltip Sizes
      </h2>


      {/* Small */}

      <TooltipDemo
        title="Small Tooltip"
        code={`<Tooltip
  content="Small tooltip"
  size="sm"
>
  <button>
    Small
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Small tooltip"
          size="sm"
        >
          <button className="rounded-md bg-indigo-600 px-5 py-3 text-white">
            Small
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Default */}

      <TooltipDemo
        title="Default Tooltip"
        code={`<Tooltip
  content="Default tooltip"
  size="default"
>
  <button>
    Default
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Default tooltip"
          size="default"
        >
          <button className="rounded-md bg-indigo-600 px-5 py-3 text-white">
            Default
          </button>
        </Tooltip>
      </TooltipDemo>


      {/* Large */}

      <TooltipDemo
        title="Large Tooltip"
        code={`<Tooltip
  content="Large tooltip"
  size="lg"
>
  <button>
    Large
  </button>
</Tooltip>`}
      >
        <Tooltip
          content="Large tooltip"
          size="lg"
        >
          <button className="rounded-md bg-indigo-600 px-5 py-3 text-white">
            Large
          </button>
        </Tooltip>
      </TooltipDemo>

    </div>
  );
};

export default TooltipPage;