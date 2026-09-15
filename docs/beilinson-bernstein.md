# Beilinson–Bernstein 국소화

# 개요

[Borel–Weil–Bott 정리](borel-weil-bott.md)는 깃발다양체 $X=G/B$ 위의 **선다발**의 코호몰로지를 계산한다. 무게 $\lambda$ 에서 나오는 선다발 $\mathcal L_\lambda$ 의 코호몰로지가 기약 표현이거나 0 이고, 어느 차수에 나타나는지를 Weyl 군의 점 작용이 결정했다.

Beilinson 과 Bernstein 은 이 계산을 **모든 가군으로** 확장했다. 선다발 대신 미분작용소의 층 $\mathcal D_X$ 위의 가군을 놓으면

$$
\mathcal D_X\text{-가군}\ \xrightarrow[\ \sim\ ]{\ \Gamma\ }\ U(\mathfrak g)_{\chi_0}\text{-가군}
$$

가 **범주 동치**가 된다. 전역단면을 취하는 함자가 동치이고, 역함자는 국소화 $\mathrm{Loc}(M)=\mathcal D_X\otimes_{U(\mathfrak g)}M$ 이다.

$$
\Gamma:\ \mathrm{Mod}(\mathcal D_X)\ \rightleftarrows\ \mathrm{Mod}\bigl(U(\mathfrak g)_{\chi_0}\bigr)\ :\mathrm{Loc}
$$

의미가 크다. Lie 대수의 표현론, 곧 순수한 대수 문제가 **깃발다양체 위의 기하 문제로 완전히 번역된다.** 표현의 구조를 층의 지지집합과 특이점으로 읽을 수 있게 되고, 이 번역이 Kazhdan–Lusztig 추측의 증명을 낳았다.

# 직관

## 왜 $\mathfrak g$ 가 $X$ 위에서 작용하는가

$G$ 가 $X=G/B$ 에 작용하므로 Lie 대수 $\mathfrak g$ 의 원소가 $X$ 위의 벡터장을 준다. 벡터장은 1 차 미분작용소이므로 사상

$$
U(\mathfrak g)\ \longrightarrow\ \Gamma(X,\mathcal D_X)
$$

이 생긴다. 놀라운 것은 이 사상이 **전사이고 핵이 정확히 자명한 중심 지표**라는 점이다.

$$
\Gamma(X,\mathcal D_X)\ \cong\ U(\mathfrak g)/\bigl(\ker\chi_0\bigr)=U(\mathfrak g)_{\chi_0}
$$

$X$ 는 아핀이 아닌데(사영다양체다) 전역단면이 이렇게 큰 것은 $\mathcal D_X$ 가 아주 많은 단면을 갖기 때문이다. 이 성질을 **$\mathcal D$ 아핀**이라 하고, $X$ 가 $\mathcal D$ 아핀이라는 것이 정리의 기술적 심장이다. 아핀 다양체 위에서 연접층과 가군이 같아지는 Serre 의 사실이, 깃발다양체에서는 $\mathcal D$ 가군에 대해 성립한다.

## 무엇이 일반화되었는가

Borel–Weil–Bott 를 이 틀에서 보면, 선다발 $\mathcal L_\lambda$ 는 $\mathcal D$ 가군 가운데 **계수 1 의 아주 특수한 것**이다. 정리는 그 전역단면만 계산했다. Beilinson–Bernstein 은 모든 $\mathcal D$ 가군에 대해 고차 코호몰로지가 사라지고 $\Gamma$ 가 완전함자임을 보이며, 계산을 동치로 격상시킨다.

```python
def bwb(n):
    """P^1 = SL_2/B 위 O(n) 의 코호몰로지 차원"""
    if n >= 0:   return (n + 1, 0)
    if n == -1:  return (0, 0)
    return (0, -n - 1)

print(' n   H^0  H^1   dim L(n) (n>=0 일 때)')
for n in range(-5, 5):
    h0, h1 = bwb(n)
    print(f'{n:3d}  {h0:4d} {h1:4d}   {n+1 if n >= 0 else "-":>5}')
```

```
 n   H^0  H^1   dim L(n) (n>=0 일 때)
 -5     0    4       -
 -4     0    3       -
 -3     0    2       -
 -2     0    1       -
 -1     0    0       -
  0     1    0       1
  1     2    0       2
  2     3    0       3
  3     4    0       4
  4     5    0       5
```

$n\ge0$ 에서 $H^0$ 의 차원이 $\mathfrak{sl}_2$ 의 기약 표현 $L(n)$ 의 차원과 같다. $n=-1$ 은 Weyl 군의 점 작용의 벽이라 모든 코호몰로지가 사라지고, $n\le-2$ 에서는 $H^1$ 으로 옮겨 간다. **이 표가 선다발 하나마다 한 줄씩인 정보라면, 국소화 정리는 표 전체를 범주의 동치로 바꾼 것이다.**

## 지지집합이 구조를 말한다

동치가 생기면 대수 쪽 대상을 기하 쪽 성질로 읽을 수 있다. 가장 쓸모 있는 것이 지지집합이다. $B$ 궤도 분해

$$
X=\bigsqcup_{w\in W}\ BwB/B\qquad(\text{Schubert 세포})
$$

가 $X$ 를 Weyl 군으로 색인된 세포로 나누고, [범주 $\mathcal O$](category-o.md) 의 대상들이 이 세포를 따라 지지된 $\mathcal D$ 가군에 대응한다. Verma 가군은 한 세포에 지지된 것, 기약 가군은 세포의 닫힘 위 교차 코호몰로지 층에 대응한다.

```mermaid
graph LR
  A["범주 O 의 대상<br/>g 가군"] -- "Loc" --> B["깃발다양체 위 D 가군"]
  B -- "Riemann-Hilbert" --> C["편향층"]
  C --> D["Schubert 세포 위 교차 코호몰로지"]
  D --> E["KL 다항식 = 줄기 코호몰로지 차원"]
```

# 정의

## 국소화 정리

$X=G/B$, $\chi_0$ 를 자명한 중심 지표라 한다.

> **정리 (Beilinson–Bernstein, 1981).** $\Gamma(X,-)$ 는 준연접 $\mathcal D_X$ 가군의 범주에서 $U(\mathfrak g)_{\chi_0}$ 가군의 범주로 가는 범주 동치이고, 역함자는 $\mathrm{Loc}(M)=\mathcal D_X\otimes_{U(\mathfrak g)}M$ 이다.

증명은 두 단계다. $X$ 가 $\mathcal D$ 아핀임을 보이고(전역단면 함자가 완전이며 충실), $\Gamma(X,\mathcal D_X)=U(\mathfrak g)_{\chi_0}$ 를 확인한다.

## 비틀린 판본

일반 중심 지표 $\chi_\lambda$ 에 대해서는 비틀린 미분작용소의 층 $\mathcal D_X^\lambda$ 를 쓴다. $\lambda$ 가 **우세 정칙**이면 같은 결론이 성립하고, 벽 위에 있으면 동치가 깨져 더 약한 진술만 남는다. 이 조건이 Weyl 군 점 작용의 벽과 정확히 같은 자리다.

# 성질

## Kazhdan–Lusztig 추측

국소화 정리와 Riemann–Hilbert 대응을 이어 붙이면

$$
\mathrm{Mod}\bigl(U(\mathfrak g)_{\chi_0}\bigr)\ \simeq\ \mathrm{Mod}_{\mathrm{rh}}(\mathcal D_X)\ \simeq\ \mathrm{Perv}(X)
$$

가 된다. 오른쪽 편향층 범주에서는 기약 대상이 Schubert 세포 닫힘 위의 교차 코호몰로지 층이고, 그 줄기 코호몰로지 차원이 [Kazhdan–Lusztig 다항식](kazhdan-lusztig.md)의 계수다. Verma 가군 안의 기약 가군 중복도가 곧 그 계수라는 추측이 이렇게 증명된다. Beilinson–Bernstein 과 Brylinski–Kashiwara 가 같은 해에 독립적으로 완성했다.

**대수적 중복도가 위상적 차원이 되는** 이 번역이 기하적 표현론이라는 분야의 출발점이다.

## 왜 벽에서 깨지는가

$\lambda$ 가 벽 위에 있으면 $\mathcal D_X^\lambda$ 의 전역단면이 여전히 $U(\mathfrak g)_{\chi_\lambda}$ 이지만 $\Gamma$ 가 충실하지 않다. 커널에 사는 가군들이 생기고, 이들이 벽 넘기 함자의 소재가 된다. 특이 무게에서 범주 $\mathcal O$ 의 블록이 정칙 블록보다 작아지는 현상이 기하 쪽에서는 이 실패로 보인다.

## 다른 계수로의 이식

같은 뼈대가 여러 방향으로 옮겨 갔다.

| 판본 | 대상 |
| --- | --- |
| 표수 $p$ (Bezrukavnikov–Mirković–Rumynin) | Frobenius 중심 위의 국소화, Lusztig 추측 |
| 양자군 | 양자 깃발다양체 위의 $\mathcal D$ 가군 |
| 아핀 Lie 대수 | 임계 준위의 국소화, 기하적 Langlands 와 연결 |
| $p$ 진 해석적 | Ardakov–Wadsley 의 $\mathcal D^\dagger$ 가군 |

각각에서 "표현론 = 기하"라는 같은 문장이 되풀이된다.

# 활용

## 범주 O 의 구조

범주 $\mathcal O$ 의 BGG 상반성, 사영 대상의 존재, 블록 분해가 모두 기하 쪽에서 자연스러운 진술이 된다. 사영 대상은 세포를 따라 밀어낸 층의 확장이고, 상반성은 편향층의 쌍대성이다. 순수 대수적으로 증명하면 조합적 계산이 필요한 사실들이 기하에서는 층의 함자적 성질로 나온다.

## Soergel 쌍가군과 범주화

Soergel 은 이 그림의 조합적 그림자를 뽑아냈다. 편향층의 초코호몰로지가 불변식환 위의 쌍가군이 되고, 그 쌍가군들이 Hecke 대수를 범주화한다. Elias 와 Williamson 이 이 범주에서 Hodge 이론을 세워 KL 다항식의 양수성을 **기하를 쓰지 않고** 증명했다. 국소화가 열어 준 길을 따라간 뒤 사다리를 걷어찬 셈이다.

## 국소 Langlands 쪽 파급

아핀 판본의 국소화가 임계 준위 $\widehat{\mathfrak g}$ 가군과 오퍼(oper) 사이의 대응을 준다. 이 대응이 기하학적 Langlands 강령의 자기동형 쪽을 기술하는 언어가 되고, 유한 차원에서 KL 추측이 차지했던 자리를 무한 차원에서 되풀이한다.

[^1]: A. Beĭlinson, J. Bernstein, *Localisation de* $\mathfrak g$*-modules*, C. R. Acad. Sci. Paris **292** (1981), 15–18. 독립적 증명은 J.-L. Brylinski, M. Kashiwara, *Kazhdan-Lusztig conjecture and holonomic systems*, Invent. Math. **64** (1981). 교과서 서술은 R. Hotta, K. Takeuchi, T. Tanisaki, *D-Modules, Perverse Sheaves, and Representation Theory* (2008) 11–12장. 표수 $p$ 판본은 R. Bezrukavnikov, I. Mirković, D. Rumynin, *Localization of modules for a semisimple Lie algebra in prime characteristic*, Ann. of Math. **167** (2008). 본문의 코호몰로지 표는 직접 계산한 것이다.

# 연관 문서

## 선수지식

- [Borel–Weil–Bott 정리와 깃발다양체](borel-weil-bott.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #group_theory #category_theory
