USE beambeats;

DROP TABLE IF EXISTS visualization;

CREATE TABLE visualization (
    id INT NOT NULL AUTO INCREMENT,
    image VARCHAR(255) NOT NULL,
    datecreated DATETIME NOT NULL,
    datemodified TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS creation;

CREATE TABLE creation (
    id              INT             NOT NULL    AUTO INCREMENT,
    originalid      INT             NOT NULL,
    image           VARCHAR(255)    NOT NULL,
    datecreated     DATETIME        NOT NULL,
    datemodified    TIMESTAMP       NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_creation_originalid FOREIGN KEY (originalid) REFERENCES visualization(id)
);

DROP TABLE IF EXISTS history;

CREATE TABLE history (
    id              INT             NOT NULL    AUTO INCREMENT,
    visualizationid INT             NOT NULL,
    datesent        DATETIME        NOT NULL,
    email           VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_history_visualizationid FOREIGN KEY (visualizationid) REFERENCES creation(id)
);
