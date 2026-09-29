import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../src/theme';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#56C7F2', '#FFE376']} style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View style={styles.starCircle}>
          <Text style={styles.starIcon}>⭐</Text>
        </View>

        <Text style={styles.title}>Mundo Estrelinha</Text>
        <Text style={styles.subtitle}>Olá, pequeno brilho!</Text>
        <Text style={styles.description}>Escolha uma aventura para brincar</Text>

        <Text style={styles.sectionTitle}>Brincar agora</Text>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconBoxYellow}>
            <Text style={styles.cardIcon}>★</Text>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Coletar Estrelas</Text>
            <Text style={styles.cardDesc}>Arraste e pegue as estrelas</Text>
            <Text style={styles.stars}>⭐⭐⭐</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconBoxBlue}>
            <Text style={styles.cardIcon}>🎨</Text>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Cores Iguais</Text>
            <Text style={styles.cardDesc}>Junte as bolinhas iguais</Text>
            <Text style={styles.stars}>⭐⭐⭐</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconBoxGreen}>
            <Text style={styles.cardIcon}>☁️</Text>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Caminho Feliz</Text>
            <Text style={styles.cardDesc}>Pule pelas nuvens fofas</Text>
            <Text style={styles.stars}>⭐⭐⭐</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: theme.spacing.xl, alignItems: 'center' },
  starCircle: { width: 140, height: 140, borderRadius: 70, backgroundColor: 'rgba(255,255,255,0.3)', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20 },
  starIcon: { fontSize: 60 },
  title: { fontSize: theme.fontSize.xxl, fontWeight: 'bold', color: theme.colors.onSurface },
  subtitle: { fontSize: theme.fontSize.lg, color: theme.colors.onSurface, marginTop: 8 },
  description: { fontSize: theme.fontSize.md, color: '#555', marginBottom: 30 },
  sectionTitle: { fontSize: theme.fontSize.xl, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 16, color: theme.colors.onSurface },
  card: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: theme.radius.lg, padding: theme.spacing.lg, marginBottom: 12, width: '100%', alignItems: 'center' },
  iconBoxYellow: { width: 50, height: 50, borderRadius: 12, backgroundColor: theme.colors.brand, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  iconBoxBlue: { width: 50, height: 50, borderRadius: 12, backgroundColor: theme.colors.info, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  iconBoxGreen: { width: 50, height: 50, borderRadius: 12, backgroundColor: theme.colors.success, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  cardIcon: { fontSize: 24, color: '#fff' },
  cardText: { flex: 1 },
  cardTitle: { fontSize: theme.fontSize.lg, fontWeight: 'bold', color: theme.colors.onSurface },
  cardDesc: { fontSize: theme.fontSize.sm, color: '#666', marginVertical: 2 },
  stars: { fontSize: 14, marginTop: 4 }
});
