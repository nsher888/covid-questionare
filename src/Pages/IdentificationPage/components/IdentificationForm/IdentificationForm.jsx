const IdentificationForm = () => {
  return (
    <div className='flex-1'>
      <form className='flex flex-col'>
        <label htmlFor='name' className='mb-3 text-xl font-bold'>
          სახელი*
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='max-w-lg px-4 py-2 mb-12 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
          placeholder='იოსებ'
        />

        <label htmlFor='lname' className='mb-3 text-xl font-bold'>
          გვარი*
        </label>
        <input
          type='text'
          name='lname'
          id='lname'
          className='max-w-lg px-4 py-2 mb-12 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
          placeholder='ჯუღაშვილი'
        />

        <label htmlFor='email' className='mb-3 text-xl font-bold'>
          მეილი*
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className='max-w-lg px-4 py-2 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
          placeholder='fbi@redberry.ge'
        />
      </form>
    </div>
  );
};

export default IdentificationForm;
