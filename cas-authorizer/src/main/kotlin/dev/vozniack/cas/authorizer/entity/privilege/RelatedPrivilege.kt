package dev.vozniack.cas.authorizer.entity.privilege

interface RelatedPrivilege {

    var privilege: Privilege

    var excluded: Boolean
}