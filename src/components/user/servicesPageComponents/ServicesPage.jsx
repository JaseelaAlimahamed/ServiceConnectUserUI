import React from 'react';
import TabComponent from './TabComponent';
import ServicesCard from './ServicesCard';

const servicesData = {
    completed: [
        { id: 1, title: 'Graphic Design Advanced', category: 'Graphic Design', rating: 4.2 },
        { id: 2, title: 'Advance Diploma in Graphic Design', category: 'Graphic Design', rating: 4.7 },
        { id: 3, title: 'Web Development with React', category: 'Web Development', rating: 4.8 },
        { id: 4, title: 'Illustration Masterclass', category: 'Graphic Design', rating: 4.6 },
        { id: 5, title: 'Photography Basics', category: 'Photography', rating: 4.3 },
        { id: 6, title: 'Motion Graphics Essentials', category: 'Graphic Design', rating: 4.5 },
    ],
    ongoing: [
        { id: 7, title: 'Intro to Graphic Design', category: 'Graphic Design', rating: 4.5 },
        { id: 8, title: 'Full-Stack Web Development', category: 'Web Development', rating: 4.4 },
        { id: 9, title: 'Advanced JavaScript', category: 'Programming', rating: 4.6 },
        { id: 10, title: 'UX/UI Design Principles', category: 'Design', rating: 4.3 },
        { id: 11, title: 'Mobile App Development', category: 'App Development', rating: 4.7 },
    ],
};

const tabs = [
    { key: 'ongoing', label: 'Ongoing' },
    { key: 'completed', label: 'Completed' },
];

const ServicesPage = () => {
    return (
        <TabComponent tabs={tabs} initialTab="completed">
            {(activeTab) => (
                <>
                    {servicesData[activeTab]?.map((course) => (
                        <ServicesCard
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            category={course.category}
                            rating={course.rating}
                        />
                    ))}
                </>
            )}
        </TabComponent>
    );
};

export default ServicesPage;
