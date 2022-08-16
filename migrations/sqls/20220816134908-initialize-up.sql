-- Table: public.Packages

-- DROP TABLE IF EXISTS public."Packages";

CREATE TABLE IF NOT EXISTS public."Packages"
(
    id integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    networks text COLLATE pg_catalog."default" NOT NULL,
    price double precision NOT NULL,
    CONSTRAINT "Packages_pkey" PRIMARY KEY (id)
);

INSERT INTO public."Packages"(
	id, name, networks, price)
	VALUES (1, 'Basic', 'CBS, CW, ABC, NBC', 9.9),
	(2, 'Gold', 'CBS, CW, ABC, NBC, BET, Freeform, Nickelodeon, Bravo, HBO, Showtime, STARZ', 37.9),
	(3, 'Select', 'CBS, CW, ABC, NBC, BET, Freeform, Nickelodeon, Bravo', 17.9),
	(4, 'Silver', 'CBS, CW, ABC, NBC, BET, Freeform, Nickelodeon, Bravo, HBO, Showtime', 27.9);
	

-- Table: public."Networks"

-- DROP TABLE IF EXISTS public."Networks";
CREATE TABLE IF NOT EXISTS public."Networks"
(
    id integer NOT NULL,
    network character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Networks_pkey" PRIMARY KEY (id)
);

INSERT INTO public."Networks"(id, network)
    VALUES (1, 'ABC'),
    (2, 'BET'),
    (3, 'Bravo'),
    (4, 'CBS'),
    (5, 'CW'),
    (6, 'Freeform'),
    (7, 'HBO'),
    (8, 'NBC'),
    (9, 'Nickelodeon'),
    (10, 'Showtime'),
    (11, 'STARZ');

CREATE TABLE IF NOT EXISTS public."Shows"
(
    id integer NOT NULL,
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    network character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "imdbRating" double precision NOT NULL,
    network_id integer,
    package_id character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT "Shows_pkey" PRIMARY KEY (id),
    CONSTRAINT network_id FOREIGN KEY (network_id)
        REFERENCES public."Networks" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

-- Table: public.Shows

-- DROP TABLE IF EXISTS public."Shows";



INSERT INTO public."Shows"(
	id, title, network, "imdbRating", network_id,package_id)
	VALUES (1, 'A Little Late With Lilly Singh', 'NBC', 7.7, 8, '1,2,3,4'),
	(2, 'American Gods', 'STARZ', 7.7, 11, '2'),
	(3, 'American Idol','ABC', 4.1, 1, '1,2,3,4'),
	(4, 'Below Deck', 'Bravo', 7.3, 3, '2,3,4'),
	(5, 'Big Little Lies', 'HBO', 8.5, 7, '2,4'),
	(6, 'black-ish', 'ABC', 7.1, 1, '1,2,3,4'),
	(7, 'Bunheads', 'Freeform', 7.6, 6, '2,3,4'),
	(8, 'Dexter', 'Showtime', 8.6, 10, '2,4'),
	(9, 'Everythings Gonna Be Okay', 'Freeform', 7.3, 6, '2,3,4'),
	(10, 'Mom', 'CBS', 7.2, 4, '1,2,3,4'),
	(11, 'Outlander', 'STARZ', 8.4, 11, '2'),
	(12, 'Rebel', 'BET', 5.4, 2, '1,2,3,4'),
	(13, 'Riverdale', 'CW', 6.8, 5, '1,2,3,4'),
	(14, 'Silicon Valley', 'HBO', 8.5, 7, '2,4'),
	(15, 'Southern Charm', 'Bravo', 6.2, 3, '2,3,4'),
	(16, 'SpongeBob Squarepants', 'Nickelodeon', 8.2, 9, '2,3,4'),
	(17, 'Rocket Power', 'Nickelodeon', 6.2, 9, '2,3,4'),
	(18, 'The Amazing Race', 'CBS', 7.6, 4, '1,2,3,4'),
	(19, 'The Fosters', 'Freeform', 7.9, 6, '2,3,4'),
	(20, 'Top Chef', 'Bravo', 7.6, 3, '2,3,4'),
	(21, 'Tyler Perrys The Oval', 'BET', 4, 2, '1,2,3,4'),
	(22, 'Zoeys Extraordinary Playlist', 'NBC', 8.1, 8, '1,2,3,4');



ALTER TABLE IF EXISTS public."Shows"
    OWNER to postgres;

ALTER TABLE IF EXISTS public."Networks"
    OWNER to postgres;

ALTER TABLE IF EXISTS public."Packages"
    OWNER to postgres;