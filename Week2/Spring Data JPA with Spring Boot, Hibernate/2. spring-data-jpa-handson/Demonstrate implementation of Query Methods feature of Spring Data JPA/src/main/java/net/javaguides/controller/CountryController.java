package net.javaguides.controller;


import net.javaguides.entity.Country;
import net.javaguides.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private final CountryService service;

    public CountryController(CountryService service) {
        this.service = service;
    }

    @GetMapping("/code/{code}")
    public Country byCode(@PathVariable String code){
        return service.findByCode(code);
    }

    @GetMapping("/name/{name}")
    public Country byName(@PathVariable String name){
        return service.findByName(name);
    }

    @GetMapping("/ignorecase/{name}")
    public Country ignoreCase(@PathVariable String name){
        return service.findByNameIgnoreCase(name);
    }

    @GetMapping("/contains/{text}")
    public List<Country> contains(@PathVariable String text){
        return service.findByContaining(text);
    }

    @GetMapping("/starts/{prefix}")
    public List<Country> starts(@PathVariable String prefix){
        return service.findByStarting(prefix);
    }

    @GetMapping("/ends/{suffix}")
    public List<Country> ends(@PathVariable String suffix){
        return service.findByEnding(suffix);
    }

    @GetMapping("/and")
    public Country andCondition(
            @RequestParam String code,
            @RequestParam String name){

        return service.findByCodeAndName(code,name);
    }

    @GetMapping("/or")
    public List<Country> orCondition(
            @RequestParam String code,
            @RequestParam String name){

        return service.findByCodeOrName(code,name);
    }

}