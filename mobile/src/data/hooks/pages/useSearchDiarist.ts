import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

interface CoordsProps {
  latitude: number;
  longitude: number;
}

export default function useSearchDiarist() {
  const [zipCode, setZipCode] = useState('');
  const [coords, setCoords] = useState<CoordsProps>();

  useEffect(() => {
    (async () => {
      try {
        const gpsPermitted = await getPermission();

        if (gpsPermitted) {
          setCoords(await getCoords());
        }
      } catch (e) {}
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (coords) {
          setZipCode(await getZipCode());
        }
      } catch (e) {}
    })();
  }, [coords]);

  async function getPermission(): Promise<boolean> {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      return status === 'granted';
    } catch (e) {
      return false;
    }
  }

  async function getCoords(): Promise<CoordsProps> {
    const currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    return currentLocation.coords;
  }

  async function getZipCode(): Promise<string> {
    if (coords) {
      const address = await Location.reverseGeocodeAsync(coords);

      if (address.length > 0) {
        return address[0].postalCode || '';
      }
    }

    return '';
  }

  return {
    zipCode,
  };
}
