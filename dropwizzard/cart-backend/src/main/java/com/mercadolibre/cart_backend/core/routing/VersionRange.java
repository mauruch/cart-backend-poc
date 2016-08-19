package com.mercadolibre.cart_backend.core.routing;

import com.github.zafarkhaja.semver.Version;

/**
 * Created by fvitali on 8/18/16.
 */
public class VersionRange {
	private Version minVersion;
	private Version maxVersion;

	public VersionRange(Version version) {
		this.minVersion = version;
		this.maxVersion = version;
	}

	public VersionRange(Version minVersion, Version maxVersion) {
		this.minVersion = minVersion;
		this.maxVersion = maxVersion;
	}

	public Version getMinVersion() {
		return this.minVersion;
	}

	public Version getMaxVersion() {
		return this.maxVersion;
	}

	@Override
	public boolean equals(Object other) {
		VersionRange otherVersionRange = null;
		if (other instanceof VersionRange) {
			otherVersionRange = (VersionRange)other;
		}

		return this.minVersion == otherVersionRange.getMinVersion()
				&& this.maxVersion == otherVersionRange.getMaxVersion();
	}

	public boolean greaterThan(VersionRange other) {
		return true;
	}

	public boolean lessThan(VersionRange other) {
		return true;
	}

	public boolean greaterOrEqualThan(VersionRange other) {
		return true;
	}

	public boolean lessOrEqualThan(VersionRange other) {
		return true;
	}
}
