import React, { Fragment } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useForm } from 'react-hook-form';

const TaskEdit = ({ handleEditOpen, setOpenEdit, openEdit, taskData }) => {
  const { title, description } = taskData;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleEditTask = data => {
    // console.log(data);
    // console.log(status.target);
  };
  return (
    <Fragment>
      <Dialog
        size={'xl'}
        className="!bg-[#44a5fd] border-[3px] w-full border-[#e0d4e8] border-opacity-25 !bg-opacity-10"
        open={openEdit}
        handler={handleEditOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-[#e0d4e8]">
          <span className="text-[#e0d4e8] font-semibold text-md lg:text-2xl">
            Task Rewrite
          </span>
        </DialogHeader>
        <DialogBody>
          <div className="w-full flex text-[#e0d4e8] space-x-3">
            <form className="w-full" onSubmit={handleSubmit(handleEditTask)}>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <label
                  className="font-semibold select-none block text-md md:text-lg lg:text-xl mb-1 md:mb-2 ml-0 md:ml-4"
                  htmlFor="task-title"
                >
                  Write your task title
                </label>
                {errors.taskTitle?.type === 'required' && (
                  <p
                    className="font-semibold mb-2 block text-sm md:text-lg lg:text-xl text-[#fe7178]"
                    role="alert"
                  >
                    Task title is required
                  </p>
                )}
              </div>

              <input
                id="task-title"
                defaultValue={title}
                className="block text-[#33085b]  focus:outline-none w-full bg-[#e8f0fd]  text-sm md:text-md lg:text-lg px-4 font-semibold rounded-md py-2 mb-1"
                {...register('taskTitle', { required: true })}
                aria-invalid={errors.taskTitle ? 'true' : 'false'}
              />
              <div className="flex flex-col md:flex-row justify-between items-center">
                <label
                  className="font-semibold select-none block text-md md:text-lg lg:text-xl mb-1 md:mb-2 ml-0 md:ml-4"
                  htmlFor="task-description"
                >
                  Write your task description
                </label>
                {errors.taskDescription?.type === 'required' && (
                  <p
                    className="font-semibold mb-2 block text-sm md:text-lg lg:text-xl text-[#fe7178]"
                    role="alert"
                  >
                    Task description is required
                  </p>
                )}
              </div>
              <textarea
                id="task-description"
                type="text-area"
                defaultValue={description}
                className="block text-[#33085b]  focus:outline-none w-full bg-[#e8f0fd]  text-sm md:text-md lg:text-lg px-4 font-semibold rounded-md py-2 mb-1"
                {...register('taskDescription', { required: true })}
                aria-invalid={errors.taskDescription ? 'true' : 'false'}
                rows="3"
              />

              <div className="w-full flex justify-end mt-4 space-x-3">
                <button
                  className="custom-button  py-1  md:py-2 border-transparent text-white  leading-8 px-4 inline-flex rounded-lg text-lg md:text-xl font-semibold"
                  onClick={() => handleEditOpen('toggle')}
                >
                  Cancel
                </button>
                <input
                  className="custom-button-secondary py-1  md:py-2 border-transparent text-white  leading-8 px-4 inline-flex rounded-lg text-lg md:text-xl font-semibold"
                  type="submit"
                  value="Continue"
                />
              </div>
            </form>
          </div>
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default TaskEdit;
