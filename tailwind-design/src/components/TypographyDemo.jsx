import React from 'react';

const TypographyDemo = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Tailwind CSS Typography</h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Headings</h2>
        <h1 className="text-5xl font-extrabold mb-2">Heading 1</h1>
        <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
        <h3 className="text-3xl font-semibold mb-2">Heading 3</h3>
        <h4 className="text-2xl font-medium mb-2">Heading 4</h4>
        <h5 className="text-xl font-normal mb-2">Heading 5</h5>
        <h6 className="text-lg font-light">Heading 6</h6>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Paragraphs</h2>
        <p className="text-base font-normal mb-4">
          This is a paragraph with normal font weight and base text size. 
          Tailwind provides a variety of text utilities to control typography easily.
        </p>
        <p className="text-lg font-medium mb-4">
          This is a paragraph with a larger font size and medium font weight. 
          Adjusting these classes allows for greater control over the appearance of text.
        </p>
        <p className="text-xl font-bold mb-4">
          This is a paragraph with an even larger font size and bold font weight.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Text Colors</h2>
        <p className="text-gray-700 mb-2">This text is gray.</p>
        <p className="text-blue-500 mb-2">This text is blue.</p>
        <p className="text-red-600 mb-2">This text is red.</p>
        <p className="text-green-400 mb-2">This text is green.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Text Alignment and Line Height</h2>
        <p className="text-left text-base leading-6 mb-2">
          This paragraph is left-aligned with a line height of 1.5 times the font size.
        </p>
        <p className="text-center text-base leading-7 mb-2">
          This paragraph is center-aligned with a slightly larger line height.
        </p>
        <p className="text-right text-base leading-8">
          This paragraph is right-aligned with a larger line height for readability.
        </p>
      </section>
    </div>
  );
};

export default TypographyDemo;
