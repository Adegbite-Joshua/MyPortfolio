import React from 'react';
import Tilt from 'react-next-tilt';

const Project = ({ project }: { project: { name: string; description: string; tags: { name: string; color: string; }[]; source_code_link: string; web_url: string; imageUrl: string; } }) => {

    return (
        <Tilt
            className='rounded-2xl sm:w-[360px] h-[500px] w-full'
        >
            <div className='w-full h-full rounded-2xl p-3 bg-[#dfd9ff]'>
                <div className='relative w-full h-[230px]'>
                    <img
                        src={project.imageUrl}
                        alt={project.name}
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex gap-2 justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(project.source_code_link, '_blank')}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src='/github.png'
                                alt='github'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text font-bold text-[24px]'>{project.name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
                <div className="flex justify-between">
                    <a href={project.source_code_link} className='flex items-end gap-2'>
                        <img src='/github.png' alt='github' className='w-7 h-7 object-contain' />
                        <span>GitHub</span>
                    </a>
                    <a href={project.web_url} className='flex items-end gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg">&lt;<path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
                        <span>Preview</span>
                    </a>
                </div>
            </div>
        </Tilt>
    );
};

export default Project;
