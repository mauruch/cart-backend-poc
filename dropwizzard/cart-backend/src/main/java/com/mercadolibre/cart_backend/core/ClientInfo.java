package com.mercadolibre.cart_backend.core;

import com.github.zafarkhaja.semver.Version;

/**
 * Created by fvitali on 8/17/16.
 */
public class ClientInfo {
	private String name;
	private Version version;

	public ClientInfo(String name, Version version) {
		this.name = name;
		this.version = version;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Version getVersion() {
		return version;
	}

	public void setVersion(Version version) {
		this.version = version;
	}
}
