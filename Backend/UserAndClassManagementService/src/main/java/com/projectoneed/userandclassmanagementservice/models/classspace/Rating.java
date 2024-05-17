package com.projectoneed.userandclassmanagementservice.models.classspace;

import lombok.Getter;

@Getter
public enum Rating {
    ONE(1),
    TWO(2),
    THREE(3),
    FOUR(4),
    FIVE(5);

    private final int rating;

    Rating(int rating) {
        this.rating = rating;
    }
}
