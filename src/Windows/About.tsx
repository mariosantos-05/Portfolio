import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div className="min-w-[860px] min-h-[500px]">
        <div className=" flex justify-left items-center mx-10 mb-5 mt-6">
          <img
            src="/profile.png"
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
          <h1 className="ml-16 text-[3rem] text-black dark:text-gray-300">
            Mario Santos
          </h1>
        </div>
        <div className=" mx-8 h-px bg-black dark:bg-gray-300 my-6"></div>

        <div className="mx-10 text-black dark:text-gray-300  h-[220px] overflow-y-auto scrollbar-transparent ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            molestie eros in odio semper, vitae maximus nulla tincidunt. Sed
            sagittis elit id nibh feugiat suscipit. Phasellus est velit, luctus
            eu nibh sed, vehicula iaculis elit. Quisque euismod magna metus, sed
            porta mauris tempor in. Donec tincidunt ultricies eros, eget
            tincidunt dui hendrerit pretium. Nullam ac nisl nisi. Proin iaculis
            interdum dictum. Proin porttitor nulla mi, quis egestas libero
            egestas a. Proin lobortis, orci ut tincidunt gravida, neque lorem
            aliquet mauris, vitae convallis mauris mauris non leo. Proin
            lobortis aliquet velit at fringilla. Donec sed dictum leo, a
            dignissim justo. Mauris egestas, mi nec varius bibendum, tellus
            neque ornare velit, ac tincidunt neque enim ac dui. Sed volutpat
            nisi nec ex convallis, ut consequat turpis venenatis. Aliquam
            feugiat in nibh non viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam
            placerat risus vel venenatis commodo. Sed vel felis vitae lorem
            condimentum aliquet. Vestibulum feugiat magna dolor, et mattis mi
            pulvinar quis. Sed molestie scelerisque felis scelerisque
            sollicitudin. Proin tempus hendrerit neque at egestas. Cras nec quam
            ac magna feugiat auctor. Mauris blandit tincidunt nisi. Proin
            vestibulum in est porta pretium. Nullam ultrices eleifend commodo.
            Suspendisse tristique mattis nisl in scelerisque. Aenean congue
            porttitor tempor. In in suscipit urna, ut cursus mauris. Etiam
            ultricies fringilla justo, ut ullamcorper lectus ultrices ut. Proin
            feugiat magna non libero vulputate, vel ullamcorper lectus rhoncus.
            Donec in felis quis dolor pretium scelerisque. Vivamus auctor
            bibendum ipsum in lacinia. Maecenas varius erat eget magna placerat,
            consectetur semper eros consectetur. Fusce feugiat vulputate nulla,
            in venenatis felis congue vel. Mauris scelerisque risus nec velit
            bibendum placerat. Aliquam erat volutpat. Phasellus odio nibh,
            venenatis eget accumsan ac, suscipit pretium nunc. Integer vitae
            aliquet ipsum. In venenatis nec neque eget suscipit. Fusce eros
            lorem, fringilla eget neque a, tincidunt interdum dui. Mauris
            venenatis, nibh quis tempus vestibulum, tortor ex consequat elit,
            non volutpat ex ante eget leo. Duis vel justo sit amet elit
            convallis viverra. Praesent eget porta nisi. Suspendisse et dictum
            ex, in tincidunt tortor. Quisque elit eros, tincidunt ac odio eu,
            tempor lobortis lorem. Aenean vel neque vitae nibh molestie varius
            id vitae nisl. Vestibulum in auctor nisi, vitae sollicitudin quam.
            Aenean interdum elit non pellentesque auctor. Mauris ut mi
            imperdiet, tempus lectus non, tempor nunc. Quisque lectus neque,
            placerat ut nisl vel, eleifend eleifend velit. Praesent quam augue,
            dictum a nulla a, vulputate semper odio. Maecenas at auctor metus.
            Nullam interdum pharetra facilisis. Mauris eu dolor orci. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Vestibulum ultricies non diam vel lacinia. Phasellus
            posuere dolor ipsum, faucibus cursus augue ullamcorper vitae. Mauris
            vehicula magna enim, eget scelerisque mi aliquet et. Aenean eget
            purus ornare, molestie ex sed, tristique neque. Nulla cursus
            efficitur suscipit. Sed tortor dui, blandit non dolor in, rhoncus
            molestie risus. Donec non augue vulputate, fermentum turpis non,
            fermentum urna. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Maecenas condimentum lorem at dui lobortis egestas. Aenean non
            imperdiet dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
