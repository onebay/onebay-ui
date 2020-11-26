module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => testPath.replace('__tests__', '__snapshots__') + snapshotExtension,
  // resolves from snapshot to test path
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace('__snapshots__', '__tests__')
      .slice(0, -snapshotExtension.length),
  testPathForConsistencyCheck: 'some/__tests__/example.test.js',
}