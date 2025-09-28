import { StorageService } from '../utils/storage';

describe('StorageService', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  describe('getItem', () => {
    it('should get item from local storage', async () => {
      const mockData = { key: 'testData' };
      (chrome.storage.local.get as jest.Mock).mockResolvedValue(mockData);

      const result = await StorageService.getItem('key');

      expect(chrome.storage.local.get).toHaveBeenCalledWith('key');
      expect(result).toBe('testData');
    });

    it('should get item from sync storage when useSync is true', async () => {
      const mockData = { key: 'syncData' };
      (chrome.storage.sync.get as jest.Mock).mockResolvedValue(mockData);

      const result = await StorageService.getItem('key', true);

      expect(chrome.storage.sync.get).toHaveBeenCalledWith('key');
      expect(result).toBe('syncData');
    });

    it('should return null when item does not exist', async () => {
      (chrome.storage.local.get as jest.Mock).mockResolvedValue({});

      const result = await StorageService.getItem('nonexistent');

      expect(result).toBeNull();
    });

    it('should handle storage errors gracefully', async () => {
      (chrome.storage.local.get as jest.Mock).mockRejectedValue(new Error('Storage error'));

      const result = await StorageService.getItem('key');

      expect(result).toBeNull();
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('setItem', () => {
    it('should set item in local storage', async () => {
      (chrome.storage.local.set as jest.Mock).mockResolvedValue(undefined);

      const result = await StorageService.setItem('key', 'value');

      expect(chrome.storage.local.set).toHaveBeenCalledWith({ key: 'value' });
      expect(result).toBe(true);
    });

    it('should set item in sync storage when useSync is true', async () => {
      (chrome.storage.sync.set as jest.Mock).mockResolvedValue(undefined);

      const result = await StorageService.setItem('key', 'value', true);

      expect(chrome.storage.sync.set).toHaveBeenCalledWith({ key: 'value' });
      expect(result).toBe(true);
    });

    it('should handle storage errors gracefully', async () => {
      (chrome.storage.local.set as jest.Mock).mockRejectedValue(new Error('Storage error'));

      const result = await StorageService.setItem('key', 'value');

      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('removeItem', () => {
    it('should remove item from local storage', async () => {
      (chrome.storage.local.remove as jest.Mock).mockResolvedValue(undefined);

      const result = await StorageService.removeItem('key');

      expect(chrome.storage.local.remove).toHaveBeenCalledWith('key');
      expect(result).toBe(true);
    });

    it('should remove item from sync storage when useSync is true', async () => {
      (chrome.storage.sync.remove as jest.Mock).mockResolvedValue(undefined);

      const result = await StorageService.removeItem('key', true);

      expect(chrome.storage.sync.remove).toHaveBeenCalledWith('key');
      expect(result).toBe(true);
    });
  });

  describe('getJSON', () => {
    it('should parse JSON string from storage', async () => {
      const jsonString = '{"name":"test","value":123}';
      (chrome.storage.local.get as jest.Mock).mockResolvedValue({ key: jsonString });

      const result = await StorageService.getJSON('key', {});

      expect(result).toEqual({ name: 'test', value: 123 });
    });

    it('should return object directly if not a string', async () => {
      const objectData = { name: 'test', value: 123 };
      (chrome.storage.local.get as jest.Mock).mockResolvedValue({ key: objectData });

      const result = await StorageService.getJSON('key', {});

      expect(result).toEqual(objectData);
    });

    it('should return default value when parsing fails', async () => {
      const invalidJson = 'invalid json';
      (chrome.storage.local.get as jest.Mock).mockResolvedValue({ key: invalidJson });

      const defaultValue = { default: true };
      const result = await StorageService.getJSON('key', defaultValue);

      expect(result).toBe(defaultValue);
      expect(console.error).toHaveBeenCalled();
    });

    it('should return default value when key does not exist', async () => {
      (chrome.storage.local.get as jest.Mock).mockResolvedValue({});

      const defaultValue = { default: true };
      const result = await StorageService.getJSON('key', defaultValue);

      expect(result).toBe(defaultValue);
    });
  });

  describe('setJSON', () => {
    it('should stringify object and store it', async () => {
      (chrome.storage.local.set as jest.Mock).mockResolvedValue(undefined);

      const objectData = { name: 'test', value: 123 };
      const result = await StorageService.setJSON('key', objectData);

      expect(chrome.storage.local.set).toHaveBeenCalledWith({
        key: JSON.stringify(objectData),
      });
      expect(result).toBe(true);
    });

    it('should store string as-is', async () => {
      (chrome.storage.local.set as jest.Mock).mockResolvedValue(undefined);

      const stringData = 'test string';
      const result = await StorageService.setJSON('key', stringData);

      expect(chrome.storage.local.set).toHaveBeenCalledWith({
        key: stringData,
      });
      expect(result).toBe(true);
    });
  });

  describe('hasItem', () => {
    it('should return true when item exists', async () => {
      (chrome.storage.local.get as jest.Mock).mockResolvedValue({ key: 'value' });

      const result = await StorageService.hasItem('key');

      expect(result).toBe(true);
    });

    it('should return false when item does not exist', async () => {
      (chrome.storage.local.get as jest.Mock).mockResolvedValue({});

      const result = await StorageService.hasItem('key');

      expect(result).toBe(false);
    });
  });

  describe('getQuotaInfo', () => {
    it('should return quota information', async () => {
      (chrome.storage.sync.getBytesInUse as jest.Mock).mockResolvedValue(1024);

      const result = await StorageService.getQuotaInfo();

      expect(result).toEqual({
        quota: 102400,
        bytesInUse: 1024,
        percentUsed: 1,
      });
    });
  });
});
