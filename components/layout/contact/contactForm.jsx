import { Input, Textarea, Snippet } from "@nextui-org/react";

export default function ContactUsForm() {
  const FormTitle = `If you're contacting us about a recent order, 
  kindly include you order number in your message for quicker assistance`;

  return (
    <div>
      <div className="text-start">
        <p>
          If you have inquiries about fundraisers, donations, events, or
          collaborations, please reach out to us via email at{" "}
          <Snippet hideSymbol size="md">
            emuna@gmail.com
          </Snippet>
        </p>
        <p>
          For wholesale queries, please contact us at{" "}
          <Snippet hideSymbol size="md">
            565465424
          </Snippet>
        </p>
        <p>
          For general information, you can email us at{" "}
          <Snippet hideSymbol size="md">
            emuna@gmail.com
          </Snippet>
        </p>
        <h1 className="text-lg font-bold">{FormTitle}</h1>
      </div>
      <div className="flex w-full flex-wrap  mb-6 md:mb-0 gap-4 bg-gray-300 rounded-lg p-4 shadow-xl ">
        <div className="flex flex-wrap w-full justify-center md:gap-0  md:flex-nowrap  md:gap-10">
          <Input type="text" color='primary' variant="underlined" label="*Name" />
          <Input type="email" color='primary' variant="underlined" label="*Email" />
        </div>

        <Input type="text" color='primary' variant="underlined" label="Phone number" />

        <Textarea
          color='primary'
          variant="underlined"
          labelPlacement="outside"
          placeholder="*Enter your comment"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
      </div>
    </div>
  );
}
