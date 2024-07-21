import Head from 'next/head'
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function Home() {
  useEffect(() => {
    const socket = io('http://localhost:8003/api/account/notifications');

    socket.on('connect', () => {
      console.log('Connected to websockets')
      socket.emit('getNotifications', { userId: 'Stephen' });
    });

    socket.on('notifications', (msg) => {
      console.log('Received notifications:', msg);
    });

    socket.on('newNotification', (msg) => {
      console.log('New:', msg);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>

    </>
  )
}
