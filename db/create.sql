USE beambeats;

DROP TABLE IF EXISTS history;
DROP TABLE IF EXISTS creation;
DROP TABLE IF EXISTS visualization;

CREATE TABLE visualization (
    id              INT             NOT NULL    AUTO_INCREMENT,
    name            VARCHAR(255)    NOT NULL,
    imageall        VARCHAR(255)    NOT NULL,
    imagepur        VARCHAR(255)    NOT NULL,
    imagered        VARCHAR(255)    NOT NULL,
    imageyel        VARCHAR(255)    NOT NULL,
    imageblu        VARCHAR(255)    NOT NULL,
    datecreated     DATETIME        NOT NULL,
    datemodified    TIMESTAMP       NOT NULL    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE creation (
    id              INT             NOT NULL    AUTO_INCREMENT,
    originalid      INT             NOT NULL,
    image           VARCHAR(255)    NOT NULL,
    datecreated     DATETIME        NOT NULL,
    datemodified    TIMESTAMP       NOT NULL    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_creation_originalid FOREIGN KEY (originalid) REFERENCES visualization(id)
);

CREATE TABLE history (
    id              INT             NOT NULL    AUTO_INCREMENT,
    visualizationid INT             NOT NULL,
    datesent        DATETIME        NOT NULL,
    email           VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_history_visualizationid FOREIGN KEY (visualizationid) REFERENCES creation(id)
);

INSERT INTO visualization(name,imageall,imagepur,imagered,imageyel,imageblu,datecreated) VALUES("sample","sample.png","sample.png","sample.png","sample.png","sample.png",NOW());
