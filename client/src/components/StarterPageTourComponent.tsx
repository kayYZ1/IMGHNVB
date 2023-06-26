import React, { useState } from 'react';
import { Button, Tour } from 'antd';
import type { TourProps } from 'antd';

const StarterPageTourComponent: React.FC = () => {

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: 'Edit new image',
      description: 'In this page you are capable of uploading an image from your computer and then manipulating it. Like adding stickers, resizing etc.',
      cover: (
        <img
          alt="Image edit tour #1"
          src="https://res.cloudinary.com/kayzvhk19/image/upload/v1687776215/NewImageEdit_iifbej.png"
        />
      )
    },
    {
      title: 'Your Images',
      description: 'In this page you will see all of your saved images you can then download them, view them or copy one of them to send to your friend.',
      cover: (
        <img 
          alt="Your images tour #2"
          src="https://res.cloudinary.com/kayzvhk19/image/upload/v1687776215/YourImages_j7owdy.png"
        />
      )
    },
    {
      title: 'Settings',
      description: 'Here you can edit or view your account settings. Simple isnt it?',
      cover: (
        <img 
          alt="Setting tour #3"
          src="https://res.cloudinary.com/kayzvhk19/image/upload/v1687776215/Settings_ckr0tq.png"
        />
      )
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} placement='bottom'/>
    </>
  );
};

export default StarterPageTourComponent;